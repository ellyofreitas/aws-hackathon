import React from "react";

import { Container } from "./styles";

export default function SearchBar() {
	return (
		<Container>
			<form action="#" className="search">
				<input
					type="text"
					className="search__input"
					placeholder="Pesquisar áudio"
				/>
				<button className="search__button">
					<svg className="search__icon">
						<use xlinkHref="icons.svg#search"></use>
					</svg>
				</button>
			</form>
		</Container>
	);
}
