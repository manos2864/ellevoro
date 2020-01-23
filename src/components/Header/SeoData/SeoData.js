import React from 'react';
import {Helmet} from 'react-helmet';

const SeoData = (props) => {

  const jsonData =
  {
    "@context":"https://schema.org",
    "@graph":[{
      "@type":"Organization",
      "@id": props.baseUrl + "#organization",
      "name":"",
      "url": props.baseUrl,
      "sameAs":[
        "https://www.facebook.com/ellevoro",
        "https://www.instagram.com/ellevoro"]
      },
      {
      "@type":"WebSite",
      "@id": props.baseUrl + "#website",
      "url": props.baseUrl,
      "name": props.siteName,
      "publisher":{
        "@type":"Organization",
        "@id": props.baseUrl + "#organization"
      }
      },
      {
        "@type":"WebPage",
        "@id": props.currentUrl + "#webpage",
        "url": props.currentUrl,
        "inLanguage": props.lang,
        "name": props.titlePage,
        "isPartOf":{
          "@id": props.baseUrl + "#website"
        },
        "about":{
          "@type":"Organization",
          "@id": props.baseUrl + "#organization"
        },
        "image":{
          "@type":"ImageObject",
          "@id": props.currentUrl + "#primaryimage",
          "url": props.imageUrl,
          "width":1200,
          "height":800,
          "caption": props.titlePage
        },
        "primaryImageOfPage":{
          "@id": props.currentUrl + "#primaryimage"
        }}]
  };

  return (
    <Helmet>
      <meta property="og:locale" content="el_GR" />
      <meta property="og:locale:alternate" content="en_GB" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={props.titlePage} />
      <meta property="og:description" content={props.descPage} />
      <meta property="og:url" content={props.currentUrl} />
      <meta property="og:site_name" content={props.siteName} />
      <meta property="og:image" content={props.imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="800" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:description" content={props.descPage} />
      <meta name="twitter:title" content={props.titlePage} />
      <meta name="twitter:image" content={props.imageUrl} />
      <meta name="twitter:site" content={props.siteName} />
      <script className='structured-data-list' type='application/ld+json'>
        {JSON.stringify(jsonData)}
      </script>
    </Helmet>
  );
};

export default SeoData;
