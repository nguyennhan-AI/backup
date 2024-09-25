import React from 'react';
import { Form, Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import './components.css';
const UploadForm = () => {
    const [form] = Form.useForm();
  
    const handleUpload = (info) => {
      if (info.file.status === 'done') {
        console.log('File uploaded successfully:', info.file.response);
      }
    };
  
    return (
      <Form form={form} layout="vertical" className='upload-form'>
        <Form.Item label={<span className="upload-video-label">Upload Video</span>} name="video">
          <Upload
            name="video"
            action="/upload/video" 
            onChange={handleUpload}
          >
            <Button icon={<UploadOutlined />}>Click to Upload Video</Button>
          </Upload>
        </Form.Item>
  
        <Form.Item label={<span className="upload-image-label">Upload Image</span>} name="image">
          <Upload
            name="image"
            action="/upload/image"
            onChange={handleUpload}
          >
            <Button icon={<UploadOutlined />}>Click to Upload Image</Button>
          </Upload>
        </Form.Item>
  
        <Form.Item>
          <Button type="primary" htmlType="submit" className="submitButton" >
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  };
  
  export default UploadForm;
