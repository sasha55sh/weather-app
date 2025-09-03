export type User = {
  id?: string;
  name: {
    first: string;
    last: string;
  };
  gender: string;
  picture: {
    large: string;
  };
  location: {
    city: string;
    country: string;
    coordinates: {
      latitude: string;
      longitude: string;
    };
  };
  email: string;
};

export type SavedUser = User & {
  weather?: {
    icon: string;
    currentTemp: string;
    lowestTemp: string;
    highestTemp: string;
  };
};

export interface ModalProps {
  show: boolean;
  icon: string;
  lowestTemp: string;
  currentTemp: string;
  highestTemp: string;
  onClose: () => void;
}
