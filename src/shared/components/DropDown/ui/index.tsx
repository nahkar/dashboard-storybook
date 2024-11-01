import { StyledEllipsisSection } from '@/app/styles/global';
import { Pill } from '@/shared/components/Pill';

import { useDropDown } from '../hooks/useDropDown';
import { DataDropDown } from '../models/types';
import arrowBottom from './img/arrow.bottom.svg';
import {
	StyledDropDownArrowBtn,
	StyledDropDownButton,
	StyledDropDownLabel,
	StyledDropDownList,
	StyledDropDownListItem,
	StyledDropDownListWrapper,
	StyledDropDownWrapper,
} from './styled';

type Props = {
	placeholder?: string;
	label?: string;
	minWidth?: number;
	data: DataDropDown[];
	withClear?: boolean;
	selected?: DataDropDown[];
	handleSelectAll?: () => void;
	handleClearAll?: () => void;
	selectHandler?: (_item: DataDropDown) => void;
	handleRemove?: (_item: DataDropDown) => void;
};
export const DropDown = ({
	placeholder,
	label,
	minWidth,
	data,
	handleSelectAll,
	handleClearAll,
	selectHandler,
	handleRemove,
	withClear,
	selected = [],
}: Props) => {
	const { isOpen, toggleDropDown, selectedIds, selectedTitles } = useDropDown({ selected });
	return (
		<StyledDropDownWrapper $minWidth={minWidth}>
			{label && <StyledDropDownLabel>{label}</StyledDropDownLabel>}
			<StyledDropDownButton $minWidth={minWidth} onClick={toggleDropDown}>
				<StyledEllipsisSection>
					{selectedTitles.join(', ') || placeholder || 'Select'}
				</StyledEllipsisSection>
				<StyledDropDownArrowBtn src={arrowBottom} alt="" $isOpen={isOpen} />
			</StyledDropDownButton>
			<StyledDropDownListWrapper>
				{isOpen && (
					<StyledDropDownList>
						{handleSelectAll && (
							<StyledDropDownListItem>
								<Pill
									title="Select All"
									onClick={handleSelectAll}
									isSelected={selectedIds.length === data.length}
								/>
							</StyledDropDownListItem>
						)}
						{data.map((item) => (
							<StyledDropDownListItem key={item.id} onClick={() => selectHandler?.(item)}>
								<Pill
									title={item.title}
									isSelected={selectedIds.includes(item.id)}
									handleRemove={() => handleRemove?.(item)}
								/>
							</StyledDropDownListItem>
						))}
						{withClear && selectedIds.length > 1 && (
							<StyledDropDownListItem>
								<Pill isClear title="Clear All" onClick={handleClearAll} />
							</StyledDropDownListItem>
						)}
					</StyledDropDownList>
				)}
			</StyledDropDownListWrapper>
		</StyledDropDownWrapper>
	);
};
