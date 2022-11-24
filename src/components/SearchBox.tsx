import { useState, type ChangeEvent, type KeyboardEvent } from 'react';
import styled from 'styled-components';
import SearchIcon from '../assets/img/search.svg';

export const SearchBox = () => {
	const [inputValue, setInputValue] = useState('');

	const triggerSearch = () => {
		window.open(`http://www.google.com/search?q=${inputValue}`);
		setInputValue('');
	};

	const checkInputKey = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			triggerSearch();
		}
	};

	const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value);

	return (
		<SearchBoxWrapper className="Servito__search">
			<SearchBoxInput
				className="Servito__search-input"
				placeholder="cerca"
				type="text"
				value={inputValue}
				onChange={handleInputValue}
				onKeyDown={checkInputKey}
			/>
			<SearchBoxButton className="Servito__search-button" onClick={triggerSearch}>
				<SearchBoxIcon className="Servito__search-icon" />
			</SearchBoxButton>
		</SearchBoxWrapper>
	);
};

export default SearchBox;

const SearchBoxWrapper = styled.div`
	display: flex;
	align-items: center;
`;
const SearchBoxInput = styled.input``;
const SearchBoxButton = styled.button`
	display: block;
`;
const SearchBoxIcon = styled(SearchIcon)`
	color: var(--Bianco);
`;
