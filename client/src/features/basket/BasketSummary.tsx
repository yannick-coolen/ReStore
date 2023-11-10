import {
  TableContainer,
  Paper,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from '@mui/material';
import { currencyFormat } from '../../app/util/util';
import { useAppSelector } from '../../app/store/configureStore';

export default function BasketSummary() {
  const { basket } = useAppSelector((state) => state.basket);

  const priceCount =
    basket?.items.reduce((sum, item) => sum + item.price * item.quantity, 0) ??
    0;

  const subtotal = priceCount;
  const amountCondition = 100;
  const nonDeliveryCosts = 0;
  const deliveryCosts = 5;

  const numberToValutaFormatDivider = (bigInt: number) => {
    const setIntToValutaDivider = 100;
    return bigInt / setIntToValutaDivider;
  };

  const numberToValutaFormat = (int: number) => {
    const setIntTimesValueFormat = 100;
    return int * setIntTimesValueFormat;
  };

  const deliveryFee =
    numberToValutaFormatDivider(subtotal) < amountCondition &&
    numberToValutaFormatDivider(subtotal) !== 0
      ? numberToValutaFormat(deliveryCosts)
      : nonDeliveryCosts;

  return (
    <TableContainer component={Paper} variant={'outlined'}>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell colSpan={2}>Subtotal</TableCell>
            <TableCell align='right'>${currencyFormat(subtotal)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>Delivery fee*</TableCell>
            <TableCell align='right'>${currencyFormat(deliveryFee)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell align='right'>
              ${currencyFormat(subtotal + deliveryFee)}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <span style={{ fontStyle: 'italic' }}>
                *Orders over $100 qualify for free delivery
              </span>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
