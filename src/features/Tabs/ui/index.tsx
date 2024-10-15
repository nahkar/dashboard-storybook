import { useTabs } from '../hooks/useTabs';
import { tabsData } from '../models/data';
import { TabsData } from '../models/types';
import { Tabs__Item, Tabs__List, Tabs__Wrapper } from './styled';

type Props = {
	data?: TabsData[];
	initialActiveIndex?: number;
};
export const Tabs = ({ data = tabsData, initialActiveIndex = 0 }: Props) => {
	const { activeIndex, onTabClick } = useTabs({ initialActiveIndex });
	return (
		<Tabs__Wrapper>
			<Tabs__List>
				{data.map((item, index) => (
					<Tabs__Item
						$isActive={activeIndex === index}
						onClick={() => onTabClick(index)}
						key={item.id}
					>
						{item.title}
					</Tabs__Item>
				))}
			</Tabs__List>
		</Tabs__Wrapper>
	);
};
