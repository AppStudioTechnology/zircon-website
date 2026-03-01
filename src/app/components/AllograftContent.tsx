import { motion } from 'motion/react';
import { Check, Shield, Zap, Layers, Activity } from 'lucide-react';

import imgProduct from '../../assets/allograft/allograft.png';
import imgBanner from '../../assets/allograft/image_4786x2025_1.png';
import imgSpecs from '../../assets/allograft/image_1200x301_1.png';
import imgBoneTumor from '../../assets/allograft/image_388x281_1.png';
import imgSpineFusion from '../../assets/allograft/image_388x281_2.png';
import imgGBR from '../../assets/allograft/image_388x281_3.png';
import imgFracture from '../../assets/allograft/image_388x281_4.png';
import imgPeriImplantitis from '../../assets/allograft/image_388x281_5.png';
import imgTrauma from '../../assets/allograft/image_388x281_6.png';
import imgSinusLift from '../../assets/allograft/image_388x281_7.png';
import imgHorizontalAug from '../../assets/allograft/image_388x281_8.png';

import imgGroup381671 from 'figma:asset/fcbf1a6ae17a709a798622b42a2fa36aaa09fb29.png';

const applications = [
  { image: imgGBR, label: 'GBR' },
  { image: imgSinusLift, label: 'Sinus Lift' },
  { image: imgHorizontalAug, label: 'Horizontal Augmentation' },
  { image: imgPeriImplantitis, label: 'Peri-Implantitis Defect' },
  { image: imgBoneTumor, label: 'Bone Tumor' },
  { image: imgSpineFusion, label: 'Cervical / Spine Fusion' },
  { image: imgFracture, label: 'Fracture' },
  { image: imgTrauma, label: 'Trauma' },
];

const keyFeatures = [
  { title: 'Convenient Operation', desc: 'Syringe-type delivery for precise, minimally invasive placement into defect sites.', icon: <Zap size={18} /> },
  { title: 'Excellent Space Retention', desc: 'Maintains graft volume and structural integrity for predictable bone regeneration outcomes.', icon: <Layers size={18} /> },
  { title: 'Strict Safety', desc: 'Processed under rigorous quality controls to eliminate immunogenic response and disease transmission risk.', icon: <Shield size={18} /> },
  { title: 'Osteoinductive Properties', desc: 'Demineralized bone matrix retains growth factors that actively stimulate new bone formation.', icon: <Activity size={18} /> },
];

export const AllograftContent = () => {
  return (
    <>
      {/* Product Overview with Banner */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <div className="inline-flex items-center px-3 py-1 bg-[#7B2D8E]/10 rounded-full text-[#7B2D8E] text-[9px] font-bold mb-3 uppercase tracking-wider font-['Montserrat']">
                MedPark A1 DBM
              </div>
              <h2 className="font-['Montserrat'] font-bold text-2xl md:text-3xl mb-3 text-[#070707]">
                Demineralized Bone Matrix
              </h2>
              <p className="font-['Arial'] text-sm text-black/70 leading-relaxed mb-4">
                A1 DBM is a human-derived demineralized bone matrix (100% cortical) delivered in a convenient syringe format. It preserves the natural bone scaffold and osteoinductive growth factors for predictable bone regeneration.
              </p>
              <div className="space-y-2.5">
                {['DBM, Cortical 100%', 'Syringe-type delivery', 'Available in 0.25cc to 5.0cc volumes', 'Rigorous safety processing'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <div className="size-5 rounded-full bg-[#7B2D8E]/10 flex items-center justify-center text-[#7B2D8E] shrink-0">
                      <Check size={12} />
                    </div>
                    <span className="text-[#070707] text-[13px] font-['Montserrat']">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <img src={imgProduct} alt="MedPark A1 DBM Allograft" className="max-w-[300px] w-full h-auto object-contain drop-shadow-xl" />
            </motion.div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-[#f3f4f6] bg-gradient-to-r from-[#f9fafb] to-white">
            <img src={imgBanner} alt="Allo Graft - DBM Cortical 100%" className="w-full h-auto object-contain" />
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-[#F9FAFB]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-10 max-w-2xl">
            <h2 className="font-['Montserrat'] font-bold text-2xl md:text-3xl mb-2 text-[#070707]">Key Features</h2>
            <p className="font-['Arial'] text-sm text-black/60">Engineered for clinical reliability and optimal bone regeneration.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {keyFeatures.map((feat, i) => (
              <div key={i} className="rounded-2xl p-5 bg-white border border-[#ebebeb] flex gap-4 items-start">
                <div className="rounded-xl bg-gradient-to-br from-[#7B2D8E] to-[#4A1A5E] p-2.5 shrink-0 text-white">
                  {feat.icon}
                </div>
                <div>
                  <h3 className="font-['Montserrat'] font-bold text-[14px] text-[#070707] mb-1">{feat.title}</h3>
                  <p className="font-['Arial'] text-[12px] text-[#6B7280] leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Applications */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-[#070707] text-2xl md:text-3xl font-bold font-['Montserrat'] mb-2">Clinical Applications</h2>
            <p className="text-[#6B7280] text-sm font-['Arial'] max-w-xl mx-auto">Versatile bone graft solution for a wide range of dental and orthopaedic indications.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {applications.map((app, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl overflow-hidden border border-[#ebebeb] bg-white group hover:shadow-md transition-shadow"
              >
                <div className="aspect-[388/281] bg-[#f9fafb] flex items-center justify-center p-3">
                  <img src={app.image} alt={app.label} className="w-full h-full object-contain" />
                </div>
                <div className="px-3 py-2.5 text-center">
                  <span className="text-[#070707] text-[12px] font-semibold font-['Montserrat']">{app.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-100">
          <img src={imgGroup381671} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full border border-white/10 mb-4">
              <span className="text-white text-[9px] font-bold uppercase tracking-widest font-['Montserrat']">Technical Specifications</span>
            </div>
            <h2 className="font-['Montserrat'] font-bold text-2xl md:text-3xl text-white mb-3">Product Specifications</h2>
            <p className="text-white/60 text-sm font-['Arial']">A1 DBM — Allograft (DBM 100%), Cortical 100%, Syringe Type</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              { label: 'Model Name', value: 'A1 DBM' },
              { label: 'Source', value: 'Allograft (DBM 100%)' },
              { label: 'Content', value: 'Cortical 100%' },
              { label: 'Type', value: 'Syringe' },
              { label: 'Available Volumes', value: '0.25cc, 0.5cc, 1.0cc, 2.5cc, 5.0cc' },
              { label: 'Brand', value: 'MedPark' },
            ].map((spec, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <div className="text-white/40 text-[9px] font-bold uppercase tracking-wider font-['Montserrat'] mb-1.5">{spec.label}</div>
                <div className="text-white font-semibold text-sm font-['Montserrat']">{spec.value}</div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl overflow-hidden bg-white p-4">
            <img src={imgSpecs} alt="A1 DBM Specifications Table" className="w-full h-auto object-contain" />
          </div>
        </div>
      </section>
    </>
  );
};
