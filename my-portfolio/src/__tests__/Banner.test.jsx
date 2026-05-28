import { render, screen } from '@testing-library/react';
import AppBanner from '../components/shared/AppBanner';
import userEvent from '@testing-library/user-event';
import { profile } from '../data/resumeData';

const setup = () => render(<AppBanner />);

function setupUserEvent(jsx) {
	return {
		user: userEvent.setup(),
		...render(jsx),
	};
}

test('it shows the title in the banner', () => {
	setup();
	expect(screen.getByText(profile.greeting)).toBeInTheDocument();
});

test('can download cv when clicked on download cv button', async () => {
	const { user } = setupUserEvent(<AppBanner />);

	const downloadCV = screen.getByText(/Download CV/i);

	expect(downloadCV).toBeInTheDocument();

	const downloadCVButton = downloadCV.closest('a');

	expect(downloadCVButton).toHaveAttribute('href', profile.resumeFile);
	expect(downloadCVButton).toHaveAttribute('download', profile.resumeDownloadName);

	await user.click(downloadCVButton);
});
