import { UserProps } from 'app/page'

import NextImage from 'next/image'
import styled from 'styled-components'

const Image = ({
  loading,
  user,
  className,
}: {
  loading: boolean
  user: UserProps | null
  className?: string
}) => {
  const getAltAndSrc = () => {
    if (loading) {
      return { alt: 'Loading Spinner', src: '/images/loading.gif' }
    } else if (user) {
      return {
        alt: 'User Profile Image',
        src: user.picture.large || '/images/placeholder.webp',
      }
    } else {
      return {
        alt: 'User Profile Placeholder',
        src: '/images/placeholder.webp',
      }
    }
  }

  const { alt, src } = getAltAndSrc()
  return (
    <NextImage
      alt={alt}
      src={src}
      width={200}
      height={200}
      className={className}
    />
  )
}

export const StyledImage = styled(Image)`
  width: 188px;
  height: 188px;
  border-radius: 100%;
  margin: 0 auto;
  position: absolute;
  top: -30px;
  left: -30px;
  border: 4px solid #cce6f4;
  object-fit: cover;
`
