import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ActivatedRoute } from '@angular/router';
import { DataSettings } from 'src/app/data.constant.setting';
import { PagesService } from '../pages.service';

@Component({
  selector: 'app-offer-detail',
  templateUrl: './offer-detail.component.html',
  styleUrls: ['./offer-detail.component.scss'],
})
export class OfferDetailComponent implements OnInit {
  modalRef?: BsModalRef;
  couponid: string;
  CouponData: any = [];
  offerData: any = [];
  encounteredErrorMsg = '';

  constructor(
    private modalService: BsModalService,
    private actRoute: ActivatedRoute,
    private PagesService: PagesService
  ) {
    this.couponid = this.actRoute.snapshot.params['couponid'];
  }

  async ngOnInit(): Promise<void> {
    await this.PagesService.fetchDetails().subscribe(
      (result: any) => {
        this.CouponData = JSON.parse(JSON.stringify(result)).offersJson;
        this.offerData = this.CouponData.filter((element: any) =>
          element.offers.some(
            (subElement: any) => subElement.id == this.couponid
          )
        ).map((element: any) => {
          let n = Object.assign({}, element, {
            offers: element.offers.filter(
              (subElement: any) => subElement.id == this.couponid
            ),
          });
          return n;
        });
      },
      (err) => {
        console.log('error', err);
      }
    );
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'modal-dialog-centered modal-claimed' })
    );
  }

  claimCoupon(appliedCoupon: string, appliedCategory: string) {
    DataSettings.claimedOffers(appliedCoupon, appliedCategory);
  }
}
