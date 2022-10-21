import { ShoppingBasket } from '@mui/icons-material'
import {
   Divider,
   Drawer,
   List,
   ListItem,
   ListItemIcon,
   ListItemText,
   Typography,
} from '@mui/material'
import React from 'react'
import BasketItem from './BasketItem'

export const Basket = ({
   order = [],
   removeFromOrder,
   cartOpen,
   closeCart = Function.prototype,
}) => {
   return (
      <Drawer anchor='right' open={cartOpen} onClose={closeCart}>
         <List sx={{ width: '400px' }}>
            <ListItem>
               <ListItemIcon>
                  <ShoppingBasket />
               </ListItemIcon>
               <ListItemText primary='Корзина' />
            </ListItem>
            <Divider />
            {!order.length ? (
               <ListItem>Корзина пуста!</ListItem>
            ) : (
               <>
                  {order.map(item => (
                     <BasketItem
                        {...item}
                        key={item.name}
                        removeFromOrder={removeFromOrder}
                     />
                  ))}

                  <Divider />
                  <ListItem>
                     <Typography sx={{ fontWeight: 700 }}>
                        Общая стоимость:
                        {order.reduce((acc, item) => {
                           return acc + item.price * item.quantity
                        }, 0)}
                     </Typography>
                  </ListItem>
               </>
            )}
         </List>
      </Drawer>
   )
}
