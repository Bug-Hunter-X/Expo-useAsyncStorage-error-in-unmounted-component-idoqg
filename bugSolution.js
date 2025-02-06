import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

function MyComponent() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const value = await AsyncStorage.getItem('@my_key');
        setData(value);
      } catch (e) {
        setError(e);
      }
    };

    fetchData();

    // Cleanup function to prevent AsyncStorage access after unmounting
    return () => {
      // You might not need anything here for this specific case.  
      // Any cleanup related to the fetchData call would be placed here.
    };
  }, []);

  return (
    <div>
      {data}
      {error}
    </div>
  );
}

export default MyComponent;