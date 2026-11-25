import AFRAME from "aframe";

// A-Frame 1.4 applies an iOS 10 HLS workaround to all iOS video textures.
// Modern iOS supplies normal RGB frames, just like the detached <video>.
AFRAME.registerComponent("video-color", {
  init() {
    this.onTextureLoaded = (event) => {
      this.configureTexture(event.detail.texture);
    };
    this.el.addEventListener("materialtextureloaded", this.onTextureLoaded);
    this.configureTexture(this.el.components.material?.material?.map);
  },

  configureTexture(texture) {
    if (!texture?.isVideoTexture) return;

    // Clear these before A-Frame's loadeddata handler selects its BGRA shader.
    texture.needsCorrectionBGRA = false;
    texture.needsCorrectionFlipY = false;
    texture.flipY = true;
    texture.encoding = AFRAME.THREE.sRGBEncoding;
    texture.needsUpdate = true;
  },

  remove() {
    this.el.removeEventListener("materialtextureloaded", this.onTextureLoaded);
  },
});
