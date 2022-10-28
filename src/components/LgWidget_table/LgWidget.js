import React from 'react';
import {
	LgWidgetContainer,
	LgWidgetTitle,
	LgWidgetTable,
	LgWidgetTh,
	LgWidgetUser,
	LgWidgetImg,
	LightTd,
	LgWidgetButton
} from './LgWidget.style';

const LgWidget = ({ characters }) => {
	return (
		<LgWidgetContainer>
			<LgWidgetTitle>Latest transactions</LgWidgetTitle>
			<LgWidgetTable>
				<tr>
					<LgWidgetTh>Name</LgWidgetTh>
					<LgWidgetTh>Status</LgWidgetTh>
					<LgWidgetTh>Species</LgWidgetTh>
					<LgWidgetTh>Type</LgWidgetTh>
					<LgWidgetTh>Gender</LgWidgetTh>
				</tr>
				{characters &&
					characters.map(item => (
						<tr key={item.id}>
							<LgWidgetUser>
								<LgWidgetImg src={item.image} alt={item.name} />
							</LgWidgetUser>
							<LightTd>{item.species}</LightTd>
							<LightTd>{item.status}</LightTd>
							<LightTd>{item.gender}</LightTd>
							<td>
								<LgWidgetButton bgColor={item.bgColor} fdColor={item.fdColor}>
									{item.type}
								</LgWidgetButton>
							</td>
						</tr>
					))}
			</LgWidgetTable>
		</LgWidgetContainer>
	);
};

export default LgWidget;
