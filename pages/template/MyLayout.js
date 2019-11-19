import React from 'react';
import Head from 'next/head';
import Header from './Header'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

export default function Layout(props) {
  const {title} = props;
  return (
    <React.Fragment>
      <Head>
        <title>{title || 'Layout - Next App with MobX and Typescript'}</title>
      </Head>
      <div style={layoutStyle}>
        <Header />
        {props.children}
      </div>
    </React.Fragment>
  )
}
