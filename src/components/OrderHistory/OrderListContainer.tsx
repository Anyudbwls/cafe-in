import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import OrderList from './OrderList';
import { OrderListType, TodayDateType } from '../../types/orderHistoryType';
import { collection, onSnapshot, query, orderBy, where } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';
import { changeDateFormat } from '../../utils/changeDateFormat';

interface ContainerPropType {
	isProgressMode: boolean;
}
function OrderListContainer({ isProgressMode }: ContainerPropType) {
	const [inProgressList, setInProgressList] = useState<OrderListType[]>([]);
	const [completeList, setCompleteList] = useState<OrderListType[]>([]);
	const [today, setToday] = useState<TodayDateType>({ year: 0, month: 0, date: 0 });

	const orderListRef = collection(db, 'testOrderList'); //orderList로 수정

	const fetchInProgress = async () => {
		const numberToday = Number(new Date(today.year, today.month, today.date));
		const unsub = onSnapshot(
			query(orderListRef, where('progress', '==', '진행중'), where('id', '>', numberToday), orderBy('id')),
			(snapshot) => {
				const inProgress: OrderListType[] = [];
				snapshot.docs.map((doc) => {
					const listObj = doc.data() as OrderListType;
					inProgress.push(listObj);
				});
				setInProgressList(inProgress);
			},
		);
		return unsub;
	};

	const fetchComplete = async () => {
		const numberToday = Number(new Date(today.year, today.month, today.date));
		const unsub = onSnapshot(
			query(orderListRef, where('progress', '==', '완료주문'), where('id', '>', numberToday), orderBy('id')),
			(snapshot) => {
				const complete: OrderListType[] = [];
				snapshot.docs.map((doc) => {
					const listObj = doc.data() as OrderListType;
					complete.push(listObj);
				});
				setCompleteList(complete);
			},
		);
		return unsub;
	};

	useEffect(() => {
		fetchInProgress();
		fetchComplete();
	}, []);

	useEffect(() => {
		const { year, month, date } = changeDateFormat(Date.now());
		setToday({ year, month, date });
	}, []);

	return (
		<OrderListContainerWrapper>
			<DateContainer>{`${today.year}년 ${today.month + 1}월 ${today.date}일`}</DateContainer>
			<ListWrapper>
				{isProgressMode ? (
					<>
						{inProgressList.map((item) => (
							<OrderList key={item.id} order={item} />
						))}
					</>
				) : (
					<>
						{completeList.map((item) => (
							<OrderList key={item.id} order={item} />
						))}
					</>
				)}
			</ListWrapper>
		</OrderListContainerWrapper>
	);
}

export default OrderListContainer;

const DateContainer = styled.p`
	font-size: ${({ theme }) => theme.fontSize['2xl']};
	font-weight: ${({ theme }) => theme.fontWeight.semibold};
	color: ${({ theme }) => (theme.lightColor ? theme.textColor.black : theme.textColor.white)};
`;

const OrderListContainerWrapper = styled.div`
	width: 1072px;
	margin: 0 auto;
	margin-top: 40px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const ListWrapper = styled.ul`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	column-gap: 12px;
	row-gap: 20px;
	margin-top: 40px;
`;
