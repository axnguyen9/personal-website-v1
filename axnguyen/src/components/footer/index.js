import React from "react";

const styles = {
  footerContainer: {
    backgroundColor: '#495867',
    color: 'white',
    position: 'relative',
    textAlign: 'center',
    width: '100vw',
    padding: '1rem 0',
  },
}

export default function Footer() {
  return(
    <div style={styles.footerContainer}>
      <h1>Footer</h1>
    </div>
  );
}