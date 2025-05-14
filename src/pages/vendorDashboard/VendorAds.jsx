import React from 'react'
import VendorAdsCArd from '../../components/VendorAdsCArd';

const VendorAds = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
      {[1,2,3,4,5,6,7,8].map((ad, index) => {
          return <VendorAdsCArd key={index} />;
        })}
      </div>
    </div>
  )
}

export default VendorAds