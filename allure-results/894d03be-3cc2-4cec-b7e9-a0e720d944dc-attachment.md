# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: uibasics.spec.ts >> Test Radio
- Location: tests/uibasics.spec.ts:13:5

# Error details

```
Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - banner [ref=e3]:
    - link [ref=e4] [cursor=pointer]:
      - /url: https://demoqa.com
      - img [ref=e5]
  - generic [ref=e8]:
    - generic [ref=e11]:
      - generic [ref=e14] [cursor=pointer]:
        - generic [ref=e15]:
          - img [ref=e17]
          - text: Elements
        - img [ref=e22]
      - generic [ref=e24]:
        - generic [ref=e26] [cursor=pointer]:
          - generic [ref=e27]:
            - img [ref=e29]
            - text: Forms
          - img [ref=e35]
        - list [ref=e38]:
          - listitem [ref=e39] [cursor=pointer]:
            - link "Practice Form" [ref=e40]:
              - /url: /automation-practice-form
              - img [ref=e41]
              - text: Practice Form
      - generic [ref=e45] [cursor=pointer]:
        - generic [ref=e46]:
          - img [ref=e48]
          - text: Alerts, Frame & Windows
        - img [ref=e53]
      - generic [ref=e57] [cursor=pointer]:
        - generic [ref=e58]:
          - img [ref=e60]
          - text: Widgets
        - img [ref=e66]
      - generic [ref=e70] [cursor=pointer]:
        - generic [ref=e71]:
          - img [ref=e73]
          - text: Interactions
        - img [ref=e78]
      - generic [ref=e82] [cursor=pointer]:
        - generic [ref=e83]:
          - img [ref=e85]
          - text: Book Store Application
        - img [ref=e90]
    - generic [ref=e92]:
      - generic [ref=e93]:
        - heading "Practice Form" [level=1] [ref=e94]
        - heading "Student Registration Form" [level=5] [ref=e95]
        - generic [ref=e96]:
          - generic [ref=e97]:
            - generic [ref=e99]: Name
            - textbox "First Name" [ref=e101]
            - textbox "Last Name" [ref=e103]
          - generic [ref=e104]:
            - generic [ref=e106]: Email
            - textbox "name@example.com" [ref=e108]
          - generic [ref=e109]:
            - generic [ref=e110]: Gender
            - generic [ref=e111]:
              - generic [ref=e112]:
                - radio "Male" [ref=e113]
                - generic [ref=e114]: Male
              - generic [ref=e115]:
                - radio "Female" [ref=e116]
                - generic [ref=e117]: Female
              - generic [ref=e118]:
                - radio "Other" [ref=e119]
                - generic [ref=e120]: Other
          - generic [ref=e121]:
            - generic [ref=e123]: Mobile(10 Digits)
            - textbox "Mobile Number" [ref=e125]
          - generic [ref=e126]:
            - generic [ref=e128]: Date of Birth
            - textbox [ref=e132]: 22 May 2026
          - generic [ref=e133]:
            - generic [ref=e135]: Subjects
            - generic [ref=e137]:
              - log [ref=e139]
              - combobox [ref=e143]
          - generic [ref=e146]:
            - generic [ref=e148]: Hobbies
            - generic [ref=e149]:
              - generic [ref=e150]:
                - checkbox "Sports" [ref=e151]
                - generic [ref=e152]: Sports
              - generic [ref=e153]:
                - checkbox "Reading" [ref=e154]
                - generic [ref=e155]: Reading
              - generic [ref=e156]:
                - checkbox "Music" [ref=e157]
                - generic [ref=e158]: Music
          - generic [ref=e159]:
            - generic [ref=e161]: Picture
            - button "Choose File" [ref=e163] [cursor=pointer]
          - generic [ref=e164]:
            - generic [ref=e166]: Current Address
            - textbox "Current Address" [ref=e168]
          - generic [ref=e169]:
            - generic [ref=e171]: State and City
            - generic [ref=e173]:
              - log [ref=e175]
              - generic [ref=e176]:
                - generic [ref=e177]:
                  - generic [ref=e178]: Select State
                  - combobox [ref=e180]
                - img [ref=e184]
            - generic [ref=e186]:
              - generic:
                - log
                - generic:
                  - generic:
                    - generic: Select City
                  - generic:
                    - generic:
                      - img
          - button "Submit" [ref=e189] [cursor=pointer]
      - iframe [ref=e193]:
        - generic [ref=f3e2]:
          - link "Advertisement" [ref=f3e4] [cursor=pointer]:
            - /url: https://adclick.g.doubleclick.net/pcs/click?xai=AKAOjssj77Nd-0K9CbDzXCN7pTO15T37RoVr34j4gLYkbK6C6mNAiwnIp2NqZrYSqoRw62Amr0la80p3Cp5kwV_eSSSoF0lAc-P8CvJKUT4xJWntiqpZKUvBNv96P7d0mVUHe15hzaa9pdw896g_eLUHPs7qwAtRqT7Ci6UDYNgcJC02ejbQJPEoOiSe6i3mdjXrtfcg2eEONImlkd0RO6KFpkEvptx_AFveC0sEH922SAhm1nxtjbPEA6ssYGLOR_8M-Q90ax4lOthvZ9W_mxW2UiAWwbGB5cc779oUTZ1EF4J9IxdDq2TwPDl1WNVq-AypjKNqx9ynL9SeU0Or70SH97X_c8slMY4kfitM42kyFYMqSM_f1NkZOlgKi3_ECtgHELttHwbyQzpUot_FhTFGtam6yGaIObrcNkLsYF7LKNhegS1oBrrtHrJcEP76fqaEUukRmtkhIVoDvCR5jX4mlmfxGwEoYDWPkm1_9-vGjg-g0EWuCjt2tB0F8u43GnLGGRMFRZDSPYQgWYciQr-r9JUXLfiSp8UySRN1jVa1o9r-dflaOoPPmud7dUFz-zWoNeo0_80CSMr4dpvC8NsN3_cP1QnvxIvVctOh9k-pxeCqZcHJ3LQ0jNkJFE8_taj_5wsRZJd9_S2ma14KqcHuXr0wGXH5FxkKGWqtqgzEgUO6TZXidIzsJvETqS6nbp94EOj5rDvZFZyBmn-9AYZJRknB2xgK-2tQB3q3W1QsRGzouVRyg6O6Uq7lNqZo6nYOnLMBrjQ3wxGm6xYpLfIROmVehim41i6rYTgo0HYpn-MFlJUqlpTkx3ilucNT2N044tU8roabLPBFetCq_eRglDZ37IukPlnad1j9Kz5s0JIqgFGGwmpsi8C8Rzw9QtAVl0t4D_Wya0qUpRmBi6k5OlmWUS6i78KMXdQX9cqyq2xE41hDam72FLVDVdLVNLD6xMqZGxmAAN8boKnjC6MEyV-jw8H4HOmBdXBZNyqaUz-XyYMGvxjZw5wHV01Tw0wTZIDHPLyKQ0e9HnxByXN7cEbIfNW1InHIH8mfIl7UyRrjvYdXg3mCmHLab6VMxANnJWZwPUX2PPBARO-SbvCZ4iMy6pGy74gRghc9ymO4xaEt3qV3G5Ge7jI4mvtHyyXTSGFgUlKfnxjRHCdlyTU5sKP0sBdMysgS_qHUF7EKNI76x__niZ_7YrX5MzXs1YSVFKapNMqI6AxA_mB-I16B926irW0buqNknMI32q0m7wRz6Q_zz9FT16PEKrq2S7xsXUO8f1D3s18pN3uGVanhqUYopkVkJAShMVzNONdQjRnuzw1qit7AyH_Rzu9I1QR1xB8F2kmf0vVTjLljzH7yFIGVLWnC1Qf-lC8E4P_48yaATtqPkCXdCLL-E9TH0R2VGz95AOcpR5UCXcUElDhFPXK1gX3ngA0psuL0foqkPGcKQVCbc2q8SyaLx_j2_wd0YLjYmR692SyfK3jT78LibEGX0iwjgSubh1WrHm_p2IcHso6XiqpVhnjRiim_C64lGB60lXMxXh7Tq_nYLYFCSFePRadDuodHArGlwqrJBRko_fTFULfqnG518v5C7W1rLda6tryBesodmF0375aAcSJfCGzOdahwr8R6JczNQ7rQeHXwPCywC5itE3HL470gsIrQ0wrHDL8ZrOME3KH10mCfCa9kTxIY1EeYUKz59zIvXfT7rnmjli2derk4TPOcUnMpgWbUAiADyR7oacsgHRuFmPYbDvv5hEzbplaU6uBmhxM24d9DvhjM8Almb1jRc3WnhGlu0jLKCFgnWyTEGzTaMnnOrdNfqnlPwLeoSU9c0P4t9fwzkejwa-CpsYpsTHiJbMeChb8pSTWg3xkWBytnJvsr6Y4Sxm0n-BqWNcMtD_c1UeJmSYrDvRVaojCLQsVU3VuTP6x_-JQFMuc5sDM&sai=AMfl-YTsxWA8NSjjq8lzZd2PyXiPCMjpl_GkXBBzm-u_jSIcXDlJDTBbUQ2JSmFy3dcVzkZh6H7NB6--wq8TKQfAX5RB5RVpsJ4dTqe_85x1F5MLJIDYRTl6DiWN4pGxia_9hlGQTVAYHSkTUmzqqinrwhLySHsjf98yUciUHYQVvpflbzbyafSm6-A7gxq0_wFeqhjFQM5YcCrW4WsxU_qZtaqNjuiEBoii8YYCc45ZbZSkS1Mc-m9C2q_FzLwmPS0ZP3-uuPfm_XqjjQjiGZ784MZXAQjvTRIgcbVWg_NBJ-xPzLLwQih0yyIiRBT5FQaQH9skpH83Qx6IFaPc_hvDs23D0rv_acXGZKqJIwmR8L_ne7Z5Vc7pl9AAVPvuLn12Kfd6pftAixzV4ky1OVlAqhnGXn0zm4P3_zgLig9ky2VpkQd9Z4GHYxjITcDfiITJMfPngi7XsSp9VrFjjzVWjDwfVtYY2XnzaW5gRQe0Ijg3rVfYcO8mTDt0ltujQ5bSBymHVcW4O8HAXc6TSiEf_8uYo25sSQUz9vQDS0nzsVoFdiPIpFm1Gm3mWPFf_FKQVIJzcMwyDyrSdizbiuCaFAyTuHYoaFE5d0QI05x2056hhHCAH97bSB0pVC_qcbqRyKJGgb1uw2y5PytjAgqesUYhg6fe8CFO9q4N-XFtrBtIRN8ymWutY-yDNfhvMzjbHwdYFD9nEAScs6IMnL6mElJx8ie-lWRhszqwW_xjhDQ3uXkcHvZ9K6TophnyToWRZaDxgIiLd99PdXbFmAl0W6cENo1K5fS6mYvfHCl427R-xiJpDtKnAj1O9ljBx-gJhftIJtsgI25SZEeDLueHH5IEHckmN1kL1C81DyeqsTOgu8NeGxZ9hwiOXOlcb-7dQxVUKgQmB7RCDDmMisc1EKA&sig=Cg0ArKJSzJ9KYd69vxhT&fbs_aeid=%5Bgw_fbsaeid%5D&urlfix=1&adurl=https://bioderma.naosindia.in/search%3Fq%3Dxdefense%26utm_source%3Ddv360%26utm_medium%3Dpaid%26utm_campaign%3Din_bio_dv360_all_product_photoderm_x-defense_awareness_display%26utm_content%3Dnative_local_xdefense_inmarket-custom-intent%26dclid%3D%25edclid!%26gad_source%3D7%26gad_campaignid%3D23825064657
            - img "Advertisement" [ref=f3e5]
          - generic [ref=f3e6]:
            - generic:
              - img [ref=f3e10] [cursor=pointer]
              - button [ref=f3e12] [cursor=pointer]:
                - img [ref=f3e13]
    - iframe [ref=e201]:
      - generic [ref=f6e2]:
        - link "Advertisement" [ref=f6e4] [cursor=pointer]:
          - /url: https://adclick.g.doubleclick.net/pcs/click?xai=AKAOjsushgH3_67Pbuf1rWl7Q5D_mXhN7ZcfM291rTHqrpN_plWX4DIxZhHQW7lPBbntZ_Q0yYflo3eylpxdDO-AShc4EQSVQLoO5xJN1y09jLTj8lDndbtaiL_xbP1lUohu1Nb4ZLp-2L_k5moLZFiRm56Bu1_b3SCD-XYCKA79R669tEZiwy4VdFnYf6fTZp0AWr9WW8GtN2F0TbxjVhsXKTqRRgCgiTgJf-x8_tpMsd8qf6-ZIjfeuUE8_vseeOzOO2rJXmEhrWES9lAnVd8se8oFwyP9PKP_b7bl6DZt8bLIPQgTfl6PxixiDat_JqyUepJnRyRZKi2CvlJNgigMbrpwpCNVXl-Dd5Ro0MTC-KSsjFoltA7TZwYVO6Ln9srTCNVrBMtFjlOfEL6tzqu7Y-DdaV1ZXnsEA5wmYvOFn4dWhe1It0XHg7trDvUwp5RcAkhuM3cCANlbLH2oueN3E_Rse7OgEYr1hCgn3hxBReCe0xEBo7ghZGyom8hXRjglgh1LGgzMSwc-y77U16FXlxLAe_f8n2G0FDIyIVyyqrofdpz4WhaBdv2-fgYhLVisFs8OPge9CHrD151seMnPH4NkWHWvnrh0ys7--dLrn_95H8tDNnumtgAldHhuXIpAS0v2Zs_UwGZ9qmhScPBJnkHESutL6l6ss2pITekJ-kjc1psgnKGrsP9DQ0YW9kyuhXD0JuL6Nk1dcBvLY6-d8uFx25TkK97Q2eLBi7kayY4yIVZ2GbT8KDv_LUnvhZN7xoaOtNv3Y3acwccUt7VD354XrzbfyL1rbm6iMw1uvR16_pmvp0RnIw5VfckhJARK3yG69ErfnKKpgD4yCarE095wRxs7pfR2ouYDRc6yglqJa59fdZ9gYfcGNRUAHTDlidDdGUGxrX6sWn2zd96qFrk46pYIgVAJGKKgcKCnTP9g-suTkJfrlHW7mhsjuiR5tWHn9c7_Y4p5cFuSQZWe25AFcOLsVHYemt80BPiCCphQhpD4JrRJsdRKsaEhUzZsBGpWnXVgMGF0j958GFXDAOuGXqjtHW9DzxyHtUuzW_4oSJ9DqUUT-osa1KBxIbxqJJa-2aHGLJJmhIfC7DOU0LKkFrc1v8SrE4poyNPiZ4PxA-66sbhgDHAsP18tckz90eQZs-TxKR_ixRo70qopH8_MYtZ1LG1sYATlusU2vKVDO9zYCW7ss-j3Pme9q8YbJ0EOiD9U4QIepn7RptPqv5Fw65xIsaH_2EoTZHXyvJyNQr167OLWJHxHozw1_KjTgGO5Qh0VK2WTyNeZ4mufjKXtA-tHaVxp6oyBDosMebpe5a9ymBCQLwP2EW9jsD0_td6_f_16jrZCbhgyGFylWuoRZEf8xGap5OGJoxqsuwVmTAjXyR7nSR_v1y9CckRF2CDznUHSghHxXyb7qCMbeBGWYC6TBYmFNI6C3a8W9dHFJutsJB0TBjySuK4I5_LXUoS22fv6x5tKNCmjKxdTEoPVoXtFTNdHv8qvwCRBhf9WtUPZ8OQBRVr5QBC3xdEpxd8lxa5hYyuUBaMKRKV662OpO-VoVB6ekmBi1t3N4WXTbwymTM0S5LWkyZYaUioNsOj2DS7eufu5jgAaRkexbnT-dtzS2JAAFg1wznrNXiaLTIFnY8w3fc-I99ZFL2HFDsbg8mC004x-RMoE3l4tPsMSRGgjsmZsNqAUURx1qKnor2iR8DhuEMezMckVajsYhAqtKPJSewmp9qEM54eOi-443EgTYPTZ5YACIDv9iLnXQN4dLm6iQm2ddRHo_CntCMNIMK4y0H0uMDH8iQeBxARDSBMmT4p8yQZ4f6-krcmuQmz1sJbsBZjPSMlbHT_7KVXlcV7xtpe2Wp0AgYCswzhAXO-pqLPYFSubMIkGVIHbldlh-nHd9wX1cR3qSXYqnkI8bVWCzQQqMiBXDPyvUHSAsvyiTV5uKZ0_Pib-E-HVvVXPWz2KyjCi&sai=AMfl-YR4hKO-RvEWppW4HJdcij4msIVMoLc6jwSGqX3eqXz0oE2OQubM60vrVGk7J1Zm7VDgPPRnIdC1V__ERhYTS9c86b30LdW66nPQfgJ2QEVFSu-xEjy2wsfAQgq20bjnY3pdtP5w_G3Cn0n6rpwqUtfhU9KRYjAfJgtVwkjOMG4I67eoKOd6y0A2FW4IiBq8BD1p0lTCmFaS9J1jtXhPZbgKM6ycNFLd6yu6GuRxoSFBCzYWfGCj0Pjq6L1j7FP8k0KegVbSFPT_BBTwdNfTQqkHQAdPvBFptEcUxok51cLsMliVsHdlICPvPNMez0aqo9Oupq4k48-2ZP_ELjTe67Od_-FUq-wUS6WxY5f94s9cDzvwNhpJtc84GUlviOcBRgjhZG7NN2DzLQw1AVCkSsiSCwjppgOMhGS05Fw9zPLvuE8JHEz7Vy7BKG4481kv-EwIheQPqx7hwaih83Uuwob98x1BUi39SlHWRuQgWVh1ZnFUI9BGEp_B40bbRm_ujjJDJTbV-IuMGHk2T4wQbO2AACkhxZ5b381bojIc9yCDMIHgfnjzLD2ji1ODHrfE_HWKKiuyk7_tO3_ZfT6TGQaTlL5jGSAXhndmP13_2Vsh6mD42F-DM89-tyENohGvwj89aL1t0HbDUplOVUjqcjltjJBB_dlkX1abE7dV4rsense0ACNU1-pW0y5Bc3H7z6xMiIw-LiRoLtWuepG2ZeNkkSC97PNBcfJnItVcvrsc-P1E74i5cDQGaKtY2d4SK3Slz-prJpIxiKT5tzF8DZjxhcptzP_HiAFSBY59rPPg3QVciRwX4YJjaqAuc1c93i78V4vp0ctc8Oj5GNNIa-EPoRIxhxxHrWGOrvmPcCdQXyc966kIZUOrsYsviPgCrGthzjrgOSsQcSigPyaC8uA&sig=Cg0ArKJSzHwArDi_bkOa&fbs_aeid=%5Bgw_fbsaeid%5D&urlfix=1&adurl=https://bioderma.naosindia.in/collections/photoderm%3Futm_source%3Ddv360%26utm_medium%3Dpaid%26utm_campaign%3Din_bio_dv360_all_always-on_photoderm_na_awareness_photodermp1-display%26utm_content%3Dnative_local_photoderm_inmarket-custom-intent%26dclid%3D%25edclid!%26gad_source%3D7%26gad_campaignid%3D23605415694
          - img "Advertisement" [ref=f6e5]
        - generic [ref=f6e6]:
          - generic:
            - img [ref=f6e10] [cursor=pointer]
            - button [ref=f6e12] [cursor=pointer]:
              - img [ref=f6e13]
  - contentinfo [ref=e202]:
    - generic [ref=e203]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
```