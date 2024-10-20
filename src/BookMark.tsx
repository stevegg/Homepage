import { FC } from 'react';
import Card from '@mui/joy/Card';
import AspectRatio from '@mui/joy/AspectRatio';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import IconButton from '@mui/joy/IconButton';
import { BookmarkType } from './BookmarkType';
import BookmarkImage from './BookmarkImage';

type BookMarkProps = {
  bookMark: BookmarkType;
};

const BookMark: FC<BookMarkProps> = ({ bookMark }) => {
  return (
    <Card
      orientation="vertical"
      variant="soft"
      className="BookMark"
      onClick={() => {
        window.open(bookMark.url, '_blank');
      }}
    >
      <div className="Header">
        <Typography level="h2" variant="plain">
          {bookMark.name}
        </Typography>
        <IconButton
          aria-label={bookMark.name}
          variant="plain"
          color="neutral"
          size="sm"
          sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
        >
          <BookmarkAdd />
        </IconButton>
      </div>
      <AspectRatio minHeight="120px" maxHeight="200px">
        <BookmarkImage type={bookMark.type} />
      </AspectRatio>
      <div className="Information">
        <Typography level="body-sm">{bookMark.description}</Typography>

        <div className="Tags">
          <Typography sx={{ maxWidth: 250 }}>
            {bookMark.tags.map((tag, index) => (
              <Typography level="body-xs" key={tag}>
                {tag} {index < bookMark.tags.length - 1 ? ', ' : ''}
              </Typography>
            ))}
          </Typography>
        </div>
      </div>
    </Card>
  );
};

export default BookMark;
