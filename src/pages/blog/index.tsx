import React from 'react';

import Card from '@components/commons/large-card';
import Layout from '@components/Layout';

const BlogView = () => {
  return (
    <Layout>
      <div className="h-full">
        <div className="grid grid-cols-2 px-48 py-20 gap-14 ">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </Layout>
  );
};

export default BlogView;
