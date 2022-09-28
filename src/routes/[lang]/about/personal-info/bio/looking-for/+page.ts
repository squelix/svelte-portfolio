import { BioNavItemEnum } from '$lib/menu/bio-nav-item.enum';
import { itemSelected } from '$stores/nav';

itemSelected.set(BioNavItemEnum.LookingFor);
