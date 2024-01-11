import {
	GiCheckMark,
	GiCrossedChains,
	GiFactory,
	GiHearts,
	GiMoneyStack,
	GiPresent,
	GiTruck,
} from 'react-icons/gi';
import { FaTags, FaUsers } from 'react-icons/fa';

export const keyPartners = 'Key Partners';
export const keyActivities = 'Key Activities';
export const keyResources = 'Key Resources';
export const valuePropositions = 'Value Propositions';
export const customerRelationships = 'Customer Relationships';
export const channels = 'Channels';
export const customerSegments = 'Customer Segments';
export const costStructure = 'Cost Structure';
export const revenueStreams = 'Revenue Streams';

export const ListIcons = {
	[keyPartners]: GiCrossedChains,
	[keyActivities]: GiCheckMark,
	[keyResources]: GiFactory,
	[valuePropositions]: GiPresent,
	[customerRelationships]: GiHearts,
	[channels]: GiTruck,
	[customerSegments]: FaUsers,
	[costStructure]: FaTags,
	[revenueStreams]: GiMoneyStack,
};

export const emptyCanvas = {
	[keyPartners]: [],
	[keyActivities]: [],
	[keyResources]: [],
	[valuePropositions]: [],
	[customerRelationships]: [],
	[channels]: [],
	[customerSegments]: [],
	[costStructure]: [],
	[revenueStreams]: [],
};
