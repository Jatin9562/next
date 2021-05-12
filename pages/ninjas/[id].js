import styles from '../../styles/Ninjas.module.css';

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
  
    // map data to an array of path objects with params (id)
    const paths = data.map(ninja => {
      return {
        params: { id: ninja.id.toString() }
      }
    })
  
    return {
      paths,
      fallback: false
    }
  }
  
  export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();
  
    return {
      props: { ninja: data }
    }
  }
  
  const Details = ({ ninja }) => {
    return (
    <div className={styles.main} >
      <div className={styles.double} >
        <h3>Name: { ninja.name }</h3>
        <h3>Email: { ninja.email }</h3>
        <h4>Website: { ninja.website }</h4>
        <h4>City: { ninja.address.city }</h4>
      </div>
      </div>
    );
  }
  
  export default Details;