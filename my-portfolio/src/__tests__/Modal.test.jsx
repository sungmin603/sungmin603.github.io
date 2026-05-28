import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HireMeModal from '../components/HireMeModal';

function setupUserEvent(jsx) {
	return {
		user: userEvent.setup(),
		...render(jsx),
	};
}

test('modal shows the contact details and a close button', async () => {
	const { user } = setupUserEvent(<HireMeModal />);

	expect(screen.getByText(/Contact details/i)).toBeInTheDocument();
	expect(screen.getByText(/603lsm@gmail.com/i)).toBeInTheDocument();

	const closeModalButton = screen.getByRole('button');
	expect(closeModalButton).toBeInTheDocument();
	await user.click(closeModalButton);
});
