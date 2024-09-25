import React from 'react';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
const BreadCrumb = () => (
    <Breadcrumb
      items={[
        {
          href: ' ',
          title: <HomeOutlined />,
        },
        {
          href: 'https://nguyennhan-ai.github.io/new-project/',
          title: (
            <>
              <UserOutlined />
              <span>About Us</span>
            </>
          ),
        },
      ]}
    />
  );
  export default BreadCrumb;