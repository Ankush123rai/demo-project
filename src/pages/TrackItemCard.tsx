import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Button,
} from "@nextui-org/react";
type Order = {
  orderPlaced: string;
  total: string;
  renter: string;
  orderNumber: string;
  deliveryDetails: {
    deliveryDate: string;
    deliveryStatus: string;
  };
  productDetails: {
    productName: string;
    productDescription: string;
  };
  orderStatus: {
    status: string;
    statusDescription: string;
  };
  buttons: string[];
};

// Sample array of orders
const ordersData: Order[] = [
  {
    orderPlaced: '16 August 2023',
    total: '$768.00',
    renter: 'Hamza ali',
    orderNumber: '0987-654321',
    deliveryDetails: {
      deliveryDate: 'Delivered Sunday',
      deliveryStatus: 'Package was handed to resident',
    },
    productDetails: {
      productName: 'Xbox Series S',
      productDescription:
        'Amet minim mollit non deserunt ullamco est sitaliqua dolor do amet sint.',
    },
    orderStatus: {
      status: 'Active order',
      statusDescription: 'Lorem ipsum',
    },
    buttons: [
      'Arriving Sunday',
      'Expected delivery on Sunday',
      'Arriving Sunday',
      'Expected delivery on Sunday',
    ],
  },

];

const  track_card = "https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?cs=srgb&dl=bloom-blooming-blossom-462118.jpg&fm=jpg";


// Component rendering orders
const OrdersComponent: React.FC = () => {

  return (
    <>
      <Card className="w-full rounded-lg shadow">
      <CardHeader className="gap-2 flex-col px-1 py-2 sm:flex-row sm:p-1 bg-slate-200 sm:px-6 sm:py-2 sm:justify-between">
          <div className="flex gap-3 float-left w-[100%] px-5 items-center sm:flex-row sm:gap-6 sm:w-[50%]">
            <div className="flex flex-col gap-2">
              <p className="text-black text-opacity-70 text-xs">
                Order placed
              </p>
              <p className="text-black text-opacity-70 text-xs">
                16 August 2023
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-black text-opacity-70 text-xs">
                Total
              </p>
              <p className="text-black text-opacity-70 text-xs">
                $768.00
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-black text-opacity-70 text-xs font-normal font-['Product Sans']">
                Renter
              </p>
              <p className="text-black text-opacity-70 text-xs font-normal font-['Product Sans']">
                Hamza ali
              </p>
            </div>
          </div>
          <div className="flex gap-3 w-[100%] px-5 sm:w-[300px] sm:float-right">
            <div className="flex flex-col gap-2">
              <p className="text-black text-opacity-70 text-xs font-normal font-['Product Sans']">
                Order # 0987-654321
              </p>
              <p className="text-violet-700 text-xs font-bold font-['Product Sans']">
                View order details
              </p>
            </div>
            <div>
              <p className="text-violet-700 text-xs font-bold font-['Product Sans']">
                Invoice
              </p>
            </div>
          </div>
        </CardHeader>


        <div className="sm:flex justify-between p-6 md: flex-row items-center w-[100%] ">
          <div className="flex flex-col gap-1 sm:w-[70%]">
            <div>
              <p className="text-black text-lg font-bold">Delivered Sunday</p>
              <p className="text-black text-xs font-normal">Package was handed to resident</p>
            </div>
            <div className="flex-col w-[100%] sm:flex gap-5 my-2 items-center md:flex-row  md:w-[100vw]">
              <img
                className="w-[100vw] py-3 rounded-lg sm:w-[300px]"
                src={track_card}
                alt="image"
              />
              <div>
                <h2 className="text-black text-opacity-60 text-xl font-bold font-['Product Sans'] ">Xbox Series S</h2>
                <p className="text-black text-opacity-40 text-base font-normal leading-normal">Amet minim mollit non deserunt ullamco est sitaliqua dolor do amet sint.</p>
              </div> 
            </div>
            <div>
              <h2 className="text-black text-lg font-bold font-['Product Sans']">Active order</h2>
              <p className="text-black text-xs font-normal font-['Product Sans']">Lorem ipsum</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Button className="border-2 cursor-pointer bg-white text-center p-2 text-black text-opacity-50 text-sm font-normal font-['Product Sans'] leading-[21px] sm:w-[250px]">Arriving Sunday</Button>
            <Button className="border-2 cursor-pointer  bg-white text-center p-2 text-black text-opacity-50 text-sm font-normal font-['Product Sans'] leading-[21px] sm:w-[250px]">
              Expected delivery on Sunday
            </Button>
            <Button className="border-2 cursor-pointer bg-white text-center p-2 text-black text-opacity-50 text-sm font-normal font-['Product Sans'] leading-[21px] sm:w-[250px]">Arriving Sunday</Button>
            <Button className="border-2 cursor-pointer  bg-white text-center p-2 text-black text-opacity-50 text-sm font-normal font-['Product Sans'] leading-[21px] sm:w-[250px]">
              Expected delivery on Sunday
            </Button>
          </div>
        </div>

      </Card>
    </>
  );
}

export default function TrackItem() {
  return (
    <div className="flex flex-col gap-6 sm:p-6">
      <OrdersComponent />
      <OrdersComponent />
      <OrdersComponent />

    </div>
  );
}