const CheckInPet = ({ loading, error, pet }) => {
	return (
		<>
			{loading ? <p>Идет проверка пользователя...</p> : null}
			{error ? <p>Ошибка : {error.message}</p> : null}
			{pet ? (
				<p>
					Pet name: {pet.name}, id: {pet.id}
				</p>
			) : null}
		</>
	);
};

export default CheckInPet;
