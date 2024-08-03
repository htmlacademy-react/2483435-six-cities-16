import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CityName, FullOffer } from '../../../types/offer-type';
import { AUTH_STATUS, AuthStatus } from '../../../const';
import { AppDispatch } from './store';
import { generateOffers } from '../../../mock/offer-mock';
import { faker } from '@faker-js/faker';
import { Comments, generateComments } from '../../../mock/comment-mock';


type RentSlice ={
  offers: FullOffer[];
  comments:Comments;
  status: AuthStatus;
  city: CityName;
  activeOffer: FullOffer | null;
  favorites:FullOffer[];
}

const rentState:RentSlice = {
  offers: [],
  comments:{},
  status: faker.helpers.arrayElement(AUTH_STATUS) as AuthStatus,
  city: 'Paris',
  activeOffer: null,
  favorites:[],
};

export const rentSlice = createSlice({
  name: 'status',
  initialState: rentState,
  reducers: {
    setOffers: (state, action:PayloadAction<FullOffer[]>) => {
      state.offers = action.payload;
    },
    setComments: (state, action: PayloadAction<Comments>) => {
      state.comments = action.payload;
    },
    setStatus: (state, action: PayloadAction<AuthStatus>) => {
      state.status = action.payload;
    },
    setCity: (state, action: PayloadAction<CityName>) => {
      state.city = action.payload;
    },
    setActiveOffer: (state, action: PayloadAction<FullOffer | null>) => {
      state.activeOffer = action.payload;
    },
    addFavorites: (state, action: PayloadAction<FullOffer>) => {
      const favorites = [...state.favorites, action.payload];
      state.favorites = favorites;
    },
  }
});


export const {
  setOffers,
  setComments,
  setStatus,
  setCity,
  setActiveOffer,
  addFavorites,
} = rentSlice.actions;

export default rentSlice.reducer;


export const loadOffers = () => (dispatch: AppDispatch)=> {
  dispatch(setOffers(generateOffers()));
};

export const loadComments = (offers:FullOffer[]) => (dispatch:AppDispatch)=> {
  dispatch(setComments(generateComments(offers)));
};
export const addToFavorites = (offer:FullOffer) => (dispatch:AppDispatch)=> {
  dispatch(addToFavorites(offer));
};

export const handleChangeCity = (city:CityName)=>(dispatch:AppDispatch)=>{
  dispatch(setCity(city));
};

export const handleActiveOffer = (offer?:FullOffer | null)=>(dispatch:AppDispatch)=>{
  dispatch(setActiveOffer(offer || null));
};

