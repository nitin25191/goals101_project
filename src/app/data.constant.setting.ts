export class DataSettings {
  public static DataMethod = {
    localStorage: {
      getItem: (params: string) => {
        let item = localStorage.getItem(params);
        return item == 'undefined' ? '' : item;
      },
      setItem: (params: string, data: any) => {
        localStorage.setItem(params, data);
      },
      clear: () => {
        localStorage.clear();
      },
      removeItem: (item: any) => {
        localStorage.removeItem(item);
      },
    },
  };

  public static claimedOffers = (
    appliedCoupon: string,
    appliedCategory: string
  ) => {
    let claimedOffers: any =
      DataSettings.DataMethod.localStorage.getItem('claimedOffers');
    if (claimedOffers) {
      let offers = JSON.parse(claimedOffers);
      let offersList = offers.offersList;
      let index = offersList.findIndex((item: any) => {
        return item.category == appliedCategory;
      });
      if (index > -1) {
        offersList[index]['list'].indexOf(appliedCoupon) === -1
          ? offersList[index]['list'].push(appliedCoupon)
          : console.log('This item already exists');
      } else {
        offersList.push({
          category: appliedCategory,
          list: [appliedCoupon],
        });
      }

      offers['offersList'] = offersList;
      DataSettings.DataMethod.localStorage.setItem(
        'claimedOffers',
        JSON.stringify(offers)
      );
    } else {
      let obj = {
        userId: DataSettings.DataMethod.localStorage.getItem('userId'),
        offersList: [
          {
            category: appliedCategory,
            list: [appliedCoupon],
          },
        ],
      };
      DataSettings.DataMethod.localStorage.setItem(
        'claimedOffers',
        JSON.stringify(obj)
      );
    }

    console.log('Applied : ', appliedCoupon, appliedCategory);
  };

  // api Based Constant
  public static AssetsURL = {
    offersData: '/assets/data/json/data.json',
  };
}
