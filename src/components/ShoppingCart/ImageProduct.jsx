import styles from "./ImageProduct.module.css";

const ImageProduct = (props) => {
  const { src } = props;
  return (
    <>
      <img className={styles.productPhoto} src={src} />
    </>
  );
};

export default ImageProduct;
