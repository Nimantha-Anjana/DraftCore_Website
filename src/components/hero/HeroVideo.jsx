const HeroVideo = () => {
  return (
    <div className="hero-video-wrapper">

      <video
        className="hero-video desktop-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/hero/hero-poster.jpg"
      >
        <source
          src="/videos/hero-video.mp4"
          type="video/mp4"
        />

        Your browser does not support video.
      </video>

      <video
        className="hero-video mobile-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/hero/hero-poster.jpg"
      >
        <source
          src="/videos/hero-video-mobile.mp4"
          type="video/mp4"
        />

        Your browser does not support video.
      </video>

    </div>
  );
};

export default HeroVideo;