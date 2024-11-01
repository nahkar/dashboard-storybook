import { DefaultButton } from '@/shared/components/DefaultButton';
import { DataDropDown, DropDown } from '@/shared/components/DropDown';

import clearIcon from '../img/clear.icon.svg';
import searchIcon from '../img/search.icon.svg';
import {
	SearchForm__InputField,
	SearchForm__InputWrapper,
	SearchForm__Row,
	SearchForm__Wrapper,
	StyledSearchFormClearButton,
	StyledSearchFormDropDownWrapper,
} from './styled';

type Props = {
	inputFieldRef: React.RefObject<HTMLInputElement>;
	searchValue: string;
	setSearchValue: React.Dispatch<React.SetStateAction<string>>;
	dataYears: DataDropDown[];
	dataEventTypes: DataDropDown[];
	selectedYears: DataDropDown[];
	selectedEventTypes: DataDropDown[];
	handleSubmit: () => void;
	handleSelectYear: (_year: DataDropDown) => void;
	handleSelectEventType: (_eventType: DataDropDown) => void;
	handleSelectAllYears: () => void;
	handleClearAllYears: () => void;
	handleRemoveYear: (_year: DataDropDown) => void;
	handleRemoveEventType: (_eventType: DataDropDown) => void;
};
export const SearchForm = ({
	inputFieldRef,
	searchValue,
	setSearchValue,
	dataYears,
	dataEventTypes,
	selectedYears,
	selectedEventTypes,
	handleSelectYear,
	handleSelectEventType,
	handleSelectAllYears,
	handleClearAllYears,
	handleRemoveYear,
	handleRemoveEventType,
	handleSubmit,
}: Props) => {
	return (
		<SearchForm__Wrapper>
			<SearchForm__Row $mb={15}>
				<SearchForm__InputWrapper>
					<img src={searchIcon} alt="" />
					<SearchForm__InputField
						ref={inputFieldRef}
						type="text"
						placeholder="Enter Event Name"
						value={searchValue}
						onChange={(e) => setSearchValue(e.target.value)}
					/>
					{searchValue && (
						<StyledSearchFormClearButton
							src={clearIcon}
							alt=""
							onClick={() => setSearchValue('')}
						/>
					)}
				</SearchForm__InputWrapper>
			</SearchForm__Row>
			<SearchForm__Row>
				<StyledSearchFormDropDownWrapper>
					<DropDown
						withClear
						handleRemove={handleRemoveYear}
						selectHandler={handleSelectYear}
						selected={selectedYears}
						placeholder=""
						label="Select Year"
						minWidth={228}
						data={dataYears}
						handleSelectAll={handleSelectAllYears}
						handleClearAll={handleClearAllYears}
					/>
					<DropDown
						handleRemove={handleRemoveEventType}
						selectHandler={handleSelectEventType}
						selected={selectedEventTypes}
						placeholder=""
						label="Select Type"
						minWidth={228}
						data={dataEventTypes}
					/>
					<DefaultButton
						onClick={handleSubmit}
						title="Search"
						isDisabled={!searchValue || !selectedYears.length || !selectedEventTypes.length}
					/>
				</StyledSearchFormDropDownWrapper>
			</SearchForm__Row>
		</SearchForm__Wrapper>
	);
};
