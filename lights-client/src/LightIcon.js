import Color from 'color'
function LightIcon({color}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="100%" weight="100%" viewBox="0 0 473 565">
      <path stroke={color === "black" ? "#F8FAFC" : color} strokeMiterlimit="10" strokeWidth="18.677" d="M57.934 391.844L99.75 356.09M9.747 299.828l53.058-14.122M6 196.018l53.957 10.141M47.292 100.622l44.215 32.6M125.53 32.567l25.929 48.45M225.5 5l2.473 54.984M327.493 23.328l-21.358 50.628M411.576 84.022l-41.067 36.506M461.411 175.211l-52.833 15.024M465.458 280.674l-53.432-12.62M429.711 372.689l-48.336-26.064"/>
      <path fill={color} d="M242.436 104.153c-2.023-.076-3.972-.151-5.995-.151-1.948 0-3.897.075-5.92.151-97.497 3.906-170.414 109.218-127.398 197.028l2.023 4.055c22.857 39.436 52.758 28.92 52.758 73.838v31.775h157.824v-32.15c0-44.694 26.978-35.605 49.16-73.237l2.323-4.808c42.192-87.885-27.578-192.595-124.775-196.501z"/>
      <path fill={Color(color).lighten(0.2)} d="M242.436 104.153c-2.023-.076-3.972-.151-5.995-.151-1.948 0-3.897.075-5.92.151-42.866 1.727-80.936 22.984-106.49 53.782 23.831-19.981 54.032-32.976 87.08-34.328 1.949-.075 3.897-.15 5.921-.15 2.023 0 3.971.075 5.995.15 97.197 3.981 167.041 108.618 124.85 196.502l-2.323 4.808c-1.724 2.929-3.448 5.558-5.246 7.886 7.794-6.159 16.562-13.671 24.655-27.341l2.323-4.808c42.117-87.885-27.653-192.595-124.85-196.501z"/>
      <path fill="#E6E6E6" d="M262.07 532.536c0 14.892-12.045 26.966-26.903 26.966-14.858 0-26.903-12.074-26.903-26.966 0-14.893 12.045-26.967 26.903-26.967 14.858 0 26.903 12.074 26.903 26.967z"/>
      <path fill="#CCC" d="M293.77 532.536H180.835c-9.067 0-23.156-7.061-23.156-15.7v-113.95a10.92 10.92 0 0110.941-10.967h137.365a10.92 10.92 0 0110.942 10.967v113.95c0 8.639-14.164 15.7-23.157 15.7z"/>
      <path fill="#E6E6E6" d="M317.226 410.849L148.162 431.28c-7.195.901-13.714-4.282-14.614-11.493l-.299-2.554c-.9-7.21 4.271-13.746 11.465-14.647l169.065-20.431c7.194-.902 13.714 4.282 14.613 11.492l.3 2.554c.899 7.211-4.271 13.746-11.466 14.648zM322.997 458.472l-169.065 20.431c-7.194.902-13.714-4.282-14.613-11.492l-.3-2.554c-.899-7.211 4.272-13.746 11.466-14.648l169.065-20.431c7.194-.901 13.714 4.282 14.613 11.493l.3 2.554c.824 7.21-4.272 13.821-11.466 14.647zM328.692 506.17l-169.065 20.432c-7.194.901-13.714-4.282-14.613-11.493l-.3-2.554c-.899-7.211 4.272-13.746 11.466-14.647l169.065-20.432c7.194-.901 13.714 4.281 14.613 11.493l.3 2.554c.899 7.211-4.272 13.746-11.466 14.647z"/>
      <path fill="#B3B3B3" d="M157.679 478.452v9.09l159.248-19.23v-9.089l-159.248 19.229zM315.952 410.999l-158.273 19.155v9.088l158.273-19.154.9-.225v-9.09c-.3.076-.525.151-.9.226zM163.3 526.151c4.946 3.831 12.14 6.385 17.535 6.385h4.872l131.22-15.849v-9.09L163.3 526.151z"/>
    </svg>
  )
}

export default LightIcon