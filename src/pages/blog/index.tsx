import React from 'react';
import Layout from '@components/Layout';
import Card from '@components/commons/large-card';

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
