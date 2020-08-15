import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

const ShowCollection = ({ collections, match }) => {
  const [collection, setCollection] = useState([]);

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState('');

  const { title } = match.params;
  const  {imageUrl, 

  useEffect(() => {
    setLoading(true);
    console.log(collections);
    if (collections) {
      collections.map((col) => {
        if (col.title === title) {
          setCollection(col.items);
        }
      });
    } else {
      setCollection([]);
      setMessage('We cannot find this collection ');
    }
    setLoading(false);
  });

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : collection.length > 0 ? (
        collection.map((item) => (
          <div key={item.id}>
           
          
            {item.name}
          </div>
        ))
      ) : (
        <div> {message}</div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    collections: state.collection,
  };
};
export default connect(mapStateToProps, null)(ShowCollection);
