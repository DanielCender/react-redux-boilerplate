import authReducer from '../../reducers/auth';

test('should set state to default values', () => {
	const state = authReducer({}, { type: '@@INIT' });
	expect(state).toEqual({});
});

test('should set state to Logged in', () => {
	const action = {
		type: 'LOGIN',
		uid: '123454dafduien',
	};
	const state = authReducer({}, action);
	expect(state.uid).toEqual(action.uid);
});

test('should set state to Logged out', () => {
	const state = authReducer({ uid: 'anything' }, { type: 'LOGOUT' });
	expect(state).toEqual({});
});
