import "./ImageBlock.css";
import blockImage from '../../assets/images/image6.jpg'

export default function ImageBlock() {
  return (
    <section className="image-block">
      <img
        src={blockImage}
        alt="Decorazione floreali giganti fatte a mano"
        className="responsive-image"
      />
    </section>
  );
}