import { error } from 'console'
import fs from 'fs'
import VCard from 'vcard-creator'

type bodyType = {
    id        :string 
    prefix?   :string
    firstName :string
    lastName  :string
    company   :string
    jobTitle  :string
    jobRole   :string
    email     :string
    phoneNo   :string
    hpNo      :string
    street    :string
    city      :string
    state    :string
    postCode  :string
    country   :string
    url       :string
    userId    :string    
    designId  :number
}

export const createVcard = ( fileName: string, body: bodyType) => {
    const myVCard = new VCard()
    myVCard
    .addName(body.lastName, body.firstName, '', body.prefix,'')
    .addCompany(body.company)
    .addJobtitle(body.jobTitle)
    .addRole(body.jobRole)
    .addEmail(body.email)
    .addPhoneNumber(body.phoneNo, 'WORK')
    .addPhoneNumber(body.hpNo, 'HP')
    .addAddress('', '', body.street , body.city, '', body.postCode, body.country)
    .addURL(body.url)
    
    try {
        fs.writeFileSync(`public/vcards/${fileName}.vcf`, myVCard.toString())
    } catch (err) {
        throw err
    }
}

export const deleteVcard =  (fileName: string) => {
    const filePath = `public/vcards/${fileName}.vcf`
    
    try {
        fs.unlinkSync(filePath)
    } catch (err) {
        throw err
    }
}