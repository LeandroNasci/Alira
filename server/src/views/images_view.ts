import Image from "../models/Image";
import 'dotenv/config';

export default {
  render(image: Image) {
    return {
      id: image.id,
      name: image.name,
      url: image.url,
    };
  },

  renderMany(images: Image[]) {
    return images.map(image => this.render(image));
  }
};
