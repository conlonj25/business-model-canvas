import {
	channels,
	costStructure,
	customerRelationships,
	customerSegments,
	keyActivities,
	keyPartners,
	keyResources,
	revenueStreams,
	valuePropositions,
} from './constants';

export type ListTitle =
	| typeof keyPartners
	| typeof keyActivities
	| typeof keyResources
	| typeof valuePropositions
	| typeof customerRelationships
	| typeof channels
	| typeof customerSegments
	| typeof costStructure
	| typeof revenueStreams;

export type List = Array<string>;
export type Canvas = Record<ListTitle, List>;
