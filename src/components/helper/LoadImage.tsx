import React, { ReactElement } from 'react'
import { useStore } from '../../Store'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import defaultImg from "../../assets/img/default/person_2-3.svg";


type ImageSizes = "w92" | "w154" | "w185" | "w300" | "w342" | "w500" | "w500" | "h632" | "w780" | "w1280" | "original";

interface Props {
  size: ImageSizes,
  url: string | undefined | null,
  className?: string,
  alt?: string,

}


export default function LoadImage(props: Props): ReactElement | null {

  const { dispatch, store } = useStore()

  if (!props.url) return null

  return (

    <LazyLoadImage
      alt={props.alt ? props.alt : ''}
      src={`${store.pageConfig.image_url}/${props.size}/${props.url}`}
      className={`img-fluid ${props.className}`}
      effect="opacity"
      threshold={400}
      placeholderSrc={defaultImg}
    />

  )
}

/* "backdrop_sizes": [
    "w300",
    "w780",
    "w1280",
    "original"
  ],
  "logo_sizes": [
    "w45",
    "w92",
    "w154",
    "w185",
    "w300",
    "w500",
    "original"
  ],
  "poster_sizes": [
    "w92",
    "w154",
    "w185",
    "w342",
    "w500",
    "w780",
    "original"
  ],
  "profile_sizes": [
    "w45",
    "w185",
    "h632",
    "original"
  ],
  "still_sizes": [
    "w92",
    "w185",
    "w300",
    "original"
  ] */
