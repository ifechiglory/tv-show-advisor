import s from "./style.module.css";
import { BASE_URL } from "../../config";
export function TVShowListItem(tvShow) {
    return (
      <div className={s.container}>
        <img
                alt={tvShow.name}
                src={BASE_URL + tvShow.backdrop_path}
                className={s.img}
        />
        <div className={s.title }> {tvShow.name}</div>
      </div>
    );
}
