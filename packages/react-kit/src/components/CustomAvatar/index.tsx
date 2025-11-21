import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import { stringAvatar } from './utils/avatarFromName';
import { Box, Skeleton } from '@mui/material';

interface Props {
  name: string;
  srcImage: string;
}

export const CustomAvatar = (props: Props) => {
  const { name, srcImage } = props;
  const [imageLoading, setImageLoading] = useState(true);

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const handleImageError = () => {
    setImageLoading(false); 
  };

  return (
    <>
      {imageLoading && (
        <Box
          sx={{
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 3,
          }}
        >
          <Skeleton
            data-testid="loading-skeleton"
            variant="circular"
            width={40}
            height={40}
            sx={{ background: 'grey' }}
            animation="pulse"
          />
        </Box>
      )}
      <Avatar
        imgProps={{
          onError: handleImageError,
        }}
        onLoad={handleImageLoad}
        alt={name}
        src={srcImage}
        {...stringAvatar(name)}
      />
    </>
  );
};
