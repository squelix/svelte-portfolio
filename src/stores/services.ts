import { ImageSharpService } from '$lib/services/image-sharp.service';
import { MailService } from '$lib/services/mail.service';
import { mailUri, strapiUri } from '$stores/env';
import { get, readable } from 'svelte/store';

export const mailService = readable(new MailService(get(mailUri)));
export const imageService = readable(new ImageSharpService(get(strapiUri)));
