import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import defaultProductImage from "../../assets/hero-product.png";
import defaultHomeImage from "../../assets/hero-1.jpg";

function Hero({
  // Konten
  welcomeText = "Selamat Datang",
  title = "Judul Hero Default",
  subtitle = "Subtitel default yang menjelaskan inti dari bagian ini.",

  // Gambar
  imageUrl,
  minHeight = "min-h-[600px]",
  isHome = false,
  isCompact = false,
  isDetailPage = false,
  hideContent = false,

  // Buttons
  buttons,

  button1Text,
  button1Link,
  button2Text,
  button2Link,
  button3Text,
  button3Link,

  contentWidth = "md:w-1/2 lg:w-2/3",
  textAlign = "text-left",
}) {
  const normalizedButtons = useMemo(() => {
    if (Array.isArray(buttons) && buttons.length > 0) {
      return buttons;
    }

    const legacyButtons = [
      button1Text &&
        button1Link && {
          text: button1Text,
          link: button1Link,
          type: "primary",
        },
      button2Text &&
        button2Link && {
          text: button2Text,
          link: button2Link,
          type: "secondary",
        },
      button3Text &&
        button3Link && {
          text: button3Text,
          link: button3Link,
          type: "secondary",
        },
    ].filter(Boolean);

    return legacyButtons;
  }, [
    buttons,
    button1Text,
    button1Link,
    button2Text,
    button2Link,
    button3Text,
    button3Link,
  ]);

  const {
    finalImageUrl,
    finalMinHeight,
    finalContentWidth,
    finalButtonJustify,
  } = useMemo(() => {
    // 1. Image
    let computedImage = imageUrl;
    if (isHome) {
      computedImage = defaultHomeImage;
    } else if (!imageUrl) {
      computedImage = defaultProductImage;
    }

    // 2. Height
    let computedHeight = minHeight;
    if (isHome) {
      computedHeight = "min-h-[900px]";
    } else if (hideContent) {
      computedHeight = "min-h-[80px]";
    } else if (isDetailPage) {
      computedHeight = "min-h-[150px] sm:min-h-[200px]";
    } else if (isCompact) {
      computedHeight = "min-h-[350px]";
    }

    // 3. Alignment
    const centered = textAlign.includes("text-center");

    return {
      finalImageUrl: computedImage,
      finalMinHeight: computedHeight,
      finalContentWidth: centered ? "mx-auto" : contentWidth,
      finalButtonJustify: centered ? "justify-center" : "justify-start",
    };
  }, [
    imageUrl,
    minHeight,
    isHome,
    isCompact,
    isDetailPage,
    hideContent,
    contentWidth,
    textAlign,
  ]);

  const heroStyle = {
    backgroundImage: `
      linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
      url(${finalImageUrl})
    `,
  };

  const renderButtons = () => {
    if (hideContent || isDetailPage || normalizedButtons.length === 0) {
      return null;
    }

    return (
      <div className={`flex flex-wrap gap-4 ${finalButtonJustify}`}>
        {normalizedButtons.map((btn, index) => {
          const isPrimary = btn.type === "primary" || index === 0;

          const isPdf =
            typeof btn.link === "string" &&
            btn.link.toLowerCase().endsWith(".pdf");

          const classes = isPrimary
            ? "bg-primary text-gray-900 font-semibold shadow-md hover:bg-gray-200"
            : "bg-transparent border-2 border-white text-white font-semibold hover:bg-primary hover:text-gray-900";

          if (isPdf) {
            return (
              <a
                key={index}
                href={btn.link}
                download
                className={`px-6 py-3 rounded-2xl transition-colors duration-300 ${classes}`}
              >
                {btn.text}
              </a>
            );
          }

          return (
            <Link
              key={index}
              to={btn.link}
              className={`px-6 py-3 rounded-2xl transition-colors duration-300 ${classes}`}
            >
              {btn.text}
            </Link>
          );
        })}
      </div>
    );
  };

  const isMinimalMode = isCompact || isDetailPage;
  return (
    <section
      className={`
        relative w-full flex items-center bg-cover bg-center text-white overflow-hidden
        ${finalMinHeight}
        ${isHome ? "rounded-b-3xl" : "rounded-b-2xl"}
      `}
      style={heroStyle}
    >
      <div className="container mx-auto px-6 py-10">
        {!hideContent && (
          <div className={`${finalContentWidth} ${textAlign}`}>
            {!isMinimalMode && (
              <span className="block text-lg font-medium mb-2">
                {welcomeText}
              </span>
            )}

            <h1
              className={`font-bold leading-tight mb-6 ${
                isMinimalMode
                  ? "text-3xl md:text-4xl"
                  : "text-4xl md:text-5xl lg:text-7xl"
              }`}
            >
              {title}
            </h1>

            {!isMinimalMode && (
              <p className="text-lg md:text-xl mb-10">{subtitle}</p>
            )}

            {renderButtons()}
          </div>
        )}
      </div>
    </section>
  );
}

export default Hero;
