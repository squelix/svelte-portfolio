import { ImageCloudinaryService } from '$lib/services/image-cloudinary.service';
import { MailService } from '$lib/services/mail.service';
import { mailUri } from '$stores/env';
import { get, readable } from 'svelte/store';

export const mailService = readable(new MailService(get(mailUri)));
export const imageService = readable(new ImageCloudinaryService());
