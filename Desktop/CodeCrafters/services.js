function Services() {
  // Array of card data
  const cardsData = [
    {
      image: ab1,
      title: "Graphic Design",
      content:
        "Logo design, Illustrations, Layout designs (magazines, books), Digital graphics (social media posts,banners), Infographics, etc.",
    },
    {
      image: ab2,
      title: "Web Development",
      content:
        "Website development, UI/UX design, Responsive design for mobile compatibility, Website maintenance and updates, etc.",
    },
    {
      image: ab3,
      title: "Consultancy",
      content:
        "Brand strategy consultancy, Expert advice on design trends and best practices, Customized solutions tailored to your specific needs.",
    },
    {
      image: ab4,
      title: "Marketing",
      content:
        "Brand Strategy Consultation, Digital Marketing Graphics, Campaign Development, Consultative Approach.",
    },
    {
      image: ab5,
      title: "Packaging",
      content:
        "Custom Packaging Design, Label and Packaging Graphics, Packaging Material Selection Guidance, etc.",
    },
    {
      image: ab6,
      title: "Photo Editing",
      content:
        "Image Retouching, Background Removal, Photo Manipulation, Restoration Services, Product Photography Editing, etc.",
    },
    // Add more card data objects as needed
  ];

  // Array of card data
  const cardsData1 = [
    // { image: s1 },
    // { image: s2 },
    { image: s3 },
    { image: s4 },
    { image: s5 },
    { image: s6 },
    // { image: s7 },
    { image: s8 },
    // { image: s9 },
    // { image: s10 },
    { image: s11 },
    // { image: s12 },
    // { image: s13 },
    // { image: s14 },
    // { image: s15 },
    { image: s16 },

    // Add more card data objects as needed
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // breakpoint for desktop
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768, // breakpoint for tablet/mobile
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };
}
