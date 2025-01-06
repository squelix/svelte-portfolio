import { JobMission } from './job-mission';
import { JobSkill } from './job-skill';

export type Job = {
	slug: string;
	title: string;
	location: string;
	picture: string;
	pictureUrl: string;
	companyName: string;
	startDate: Date;
	endDate?: Date;
	jobMissions: JobMission[];
	jobSkills?: JobSkill[];
};
