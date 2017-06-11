CREATE TABLE albums (
    album_id smallint(5) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    album_name varchar(100) NOT NULL,
    author_id int(7) UNSIGNED NOT NULL,
    album_image varchar(255) UNIQUE,
    album_year varchar(4) NOT NULL,
    album_description text,
    FOREIGN KEY (author_id) REFERENCES authors(author_id)
);

CREATE TABLE authors (
    author_id int(7) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    author_name varchar(100) UNIQUE NOT NULL
);

CREATE TABLE songs (
    song_id int(7) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    song_name varchar(255) NOT NULL,
    song_time tinyint(3) UNSIGNED NOT NULL,
    song_mp3_url varchar(255) UNIQUE NOT NULL,
    album_id int(7) UNSIGNED NOT NULL,
    FOREIGN KEY (album_id) REFERENCES albums(album_id)
);