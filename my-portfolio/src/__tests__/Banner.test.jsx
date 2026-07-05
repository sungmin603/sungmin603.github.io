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

test('can download english and korean resumes from the banner', async () => {
	const { user } = setupUserEvent(<AppBanner />);

	for (const resume of profile.resumes) {
		const downloadResume = screen.getByLabelText(resume.label);
		expect(downloadResume).toBeInTheDocument();

		const downloadResumeButton = downloadResume.closest('a');
		expect(downloadResumeButton).toHaveAttribute('href', resume.file);
		expect(downloadResumeButton).toHaveAttribute('download', resume.downloadName);

		await user.click(downloadResumeButton);
	}
});
